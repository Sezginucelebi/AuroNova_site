<?php
header('Content-Type: application/json; charset=utf-8');

$configPath = __DIR__ . '/telegram-config.php';
$config = file_exists($configPath) ? require $configPath : [];

$botToken = $config['bot_token'] ?? getenv('TELEGRAM_BOT_TOKEN');
$chatId = $config['chat_id'] ?? getenv('TELEGRAM_CHAT_ID');

if (!$botToken || !$chatId) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Telegram ayarlari eksik. forms/telegram-config.php dosyasini kontrol edin.'
    ]);
    exit;
}

$ad = trim($_POST['Ad'] ?? 'Belirtilmemis');
$soyad = trim($_POST['Soyad'] ?? '');
$email = trim($_POST['Email'] ?? 'Belirtilmemis');
$telefon = trim($_POST['Telefon'] ?? 'Belirtilmemis');
$konu = trim($_POST['Konu'] ?? 'AuroNova Bildirimi');
$mesaj = trim($_POST['Mesaj'] ?? '-');

$text = "<b>AuroNova Yazilim - Yeni Bildirim</b>\n\n";
$text .= "<b>Gonderen:</b> " . htmlspecialchars($ad . ' ' . $soyad, ENT_QUOTES, 'UTF-8') . "\n";
$text .= "<b>E-posta:</b> " . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "\n";
$text .= "<b>Telefon:</b> " . htmlspecialchars($telefon, ENT_QUOTES, 'UTF-8') . "\n";
$text .= "<b>Konu:</b> " . htmlspecialchars($konu, ENT_QUOTES, 'UTF-8') . "\n\n";
$text .= "<b>Mesaj:</b>\n" . htmlspecialchars($mesaj, ENT_QUOTES, 'UTF-8');

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => "https://api.telegram.org/bot{$botToken}/sendMessage",
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'chat_id' => $chatId,
        'text' => $text,
        'parse_mode' => 'HTML'
    ]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10
]);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    echo json_encode([
        'status' => 'error',
        'message' => "Sunucu Telegram'a baglanamadi (cURL): " . $error
    ]);
    exit;
}

$result = json_decode($response, true);

if (isset($result['ok']) && $result['ok'] === true) {
    echo json_encode(['status' => 'success', 'message' => 'Iletildi']);
    exit;
}

echo json_encode([
    'status' => 'error',
    'message' => 'Telegram API: ' . ($result['description'] ?? 'Bilinmeyen hata')
]);

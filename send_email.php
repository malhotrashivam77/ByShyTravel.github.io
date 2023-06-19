<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["username"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $message = $_POST["comment"];

    // Set up the recipient email address
    $to = "malhotrashivam77@gmail.com";

    // Set up the email subject
    $subject = "New contact form submission";

    // Build the email body
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Mobile: " . $mobile . "\n";
    $body .= "Message: " . $message;

    // Set up the email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        echo "Oops! An error occurred while sending the message.";
    }
}
?>

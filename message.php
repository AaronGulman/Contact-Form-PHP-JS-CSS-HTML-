<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$website = $_POST['website'];
	$message = $_POST['message'];


	if(empty($email) || empty($message)){
		echo "Email and message field are required!";
	}elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
		echo "Enter a valid email address!";
	}else{
			$receiver = "my@email.com";
			$subject = "From: $name <$email>";
			$body = "Name: $name\n Email: $email\n Phone: $phone\n Website: $website\n Message: $message";
			$sender = "From: $email";
			if(mail($receiver, $subject, $body, $sender)){
				echo "Your message has been sent!";
			}else{
				echo "Error. Your message hasn't been sent!";
			}
	}

?>
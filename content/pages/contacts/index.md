---
title: "Get In Touch"
template: "page"
socialImage: "./get-in-touch.png"
---
<form name="contact" method="POST" data-netlify="true">
<ul>
	<li>
		<label for="name">Name:</label>
		<input type="text" id="name" name="user_name" />
	</li>
	<li>
		<label for="mail">E-mail:</label>
		<input type="email" id="mail" name="user_mail" />
	</li>
	<li>
		<label for="msg">Message:</label>
		<textarea id="msg" name="user_message" rows="5" cols="40"></textarea>
	</li>
	<li class="button">
		<button type="submit">Send your message</button>
	</li>
</ul>
</form>
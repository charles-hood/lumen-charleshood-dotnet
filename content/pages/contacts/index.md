---
title: "Get In Touch"
template: "page"
socialImage: "./get-in-touch.png"
---
<form class="contact-form" name="contact" method="POST" data-netlify="true">
<ul>
	<p>
		<label for="name">Name:</label>
		<input type="text" id="name" name="user_name" />
	</p>
	<p>
		<label for="mail">E-mail:</label>
		<input type="email" id="mail" name="user_mail" />
	</p>
	<p>
		<label for="Note:">Message:</label>
		<textarea id="msg" name="user_message" rows="5" cols="40"></textarea>
	</p>
	<p>
		<button type="submit">Send your message</button>
	</p>
</ul>
</form>
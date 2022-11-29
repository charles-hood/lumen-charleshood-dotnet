---
title: "Get In Touch"
template: "page"
socialImage: "./get-in-touch.png"
---
<form class="contact-form" name="contactme" action="/pages/thankyou" method="POST" data-netlify="true">
<label for="name">Name:</label>
<input type="text" id="name" name="user_name" />
<label for="mail">E-mail:</label>
<input type="email" id="mail" name="user_mail" />
<label for="Note:">Message:</label>
<textarea id="msg" name="user_message" rows="5" cols="40"></textarea>
<button style="font-size: 18px;" type="submit">SEND</button>
</form>
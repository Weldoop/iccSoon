<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Montserrat:wght@300&family=Poppins:wght@300&display=swap" rel="stylesheet">
	<title>Ice Cream Crypto</title>
	{{-- logo --}}

	<link rel="icon" href="{{ url('images/image00001.png') }}">

	@vite('resources/css/app.css')
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WLR8JVF60T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WLR8JVF60T');
</script>
<body>
	<div id="app"></div>

	@vite('resources/js/app.js')
</body>
</html>


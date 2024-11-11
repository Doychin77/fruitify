<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{ secure_asset('favicon.png') }}">

    <meta name="description" content="Ogani Template" />
    <meta name="keywords" content="Ogani, unica, creative, html" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Fruitify</title>

    <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
        rel="stylesheet"
    />

    @viteReactRefresh
    @vite(['resources/js/src/index.jsx', 'resources/css/app.css'])
</head>
<body>
<div id="root"></div>

<!-- External JS Files -->
<script src="{{ secure_asset('js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ secure_asset('js/bootstrap.min.js') }}"></script>
<script src="{{ secure_asset('js/jquery.nice-select.min.js') }}"></script>
<script src="{{ secure_asset('js/jquery-ui.min.js') }}"></script>
<script src="{{ secure_asset('js/jquery.slicknav.js') }}"></script>
<script src="{{ secure_asset('js/mixitup.min.js') }}"></script>
<script src="{{ secure_asset('js/owl.carousel.min.js') }}"></script>
<script src="{{ secure_asset('js/main.js') }}"></script>
</body>
</html>

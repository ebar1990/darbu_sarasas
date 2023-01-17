const view_prideti_darba = `<html>

<head>
<meta charset="UTF-8">
</head>

<body>
    <h1>Pridėti darba</h1>
    
    <form method="post" action="/prideti_darba">
        <input type="text" name="darbo_aprasas">
        <input type="submit" value="Pridėti">
    </form>


</body>


</html>`

export default view_prideti_darba

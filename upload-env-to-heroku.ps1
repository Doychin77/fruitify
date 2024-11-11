Get-Content .env | ForEach-Object {
    $envVar = $_.Split('=')[0]
    $envValue = $_.Split('=')[1]
    heroku config:set $envVar=$envValue
}

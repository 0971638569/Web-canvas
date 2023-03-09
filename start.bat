@REM call node backend/servers/createServer.js
@REM call node backend/servers/json.js
@REM call node backend/servers/csv.js
@REM call node backend/servers/html.js
start cmd.exe /C "copy Projects\mjo_20\WebApp\wwwroot\css content-server\public\mjo\assets\css"
call node backend/servers/htmlFile.js
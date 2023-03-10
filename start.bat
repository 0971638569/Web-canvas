@REM call node backend/servers/createServer.js
@REM call node backend/servers/json.js
@REM call node backend/servers/csv.js
@REM call node backend/servers/html.js
start cmd.exe /C "xcopy frontend\ backend\servers\modules /E /y"
@REM call node backend/servers/htmlFile.js
call node backend/servers/routes.js
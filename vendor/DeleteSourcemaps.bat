@echo off
setlocal enabledelayedexpansion

echo.
echo Source Map Removal Tool
echo This tool is used to remove sourcemaps from all subdirectories to try and conserve space and reduce upload time to GitHub.
echo.
echo Searching for .js.map files in %cd% ...
echo.

rem Collect all .js.map files recursively
set count=0
for /r %%F in (*.js.map) do (
    set /a count+=1
    echo [!count!] %%F
    set "file[!count!]=%%F"
)

if %count%==0 (
    echo No .js.map files found.
    pause
    ::exit /b
    goto :process_css
)

echo.
set /p choice=Delete all %count% .js.map files? (Y/N): 
if /i not "%choice%"=="Y" (
    echo Aborted.
    ::exit /b
    goto :process_css
)

echo.
echo Deleting files...
for /l %%I in (1,1,%count%) do (
    del /f /q "!file[%%I]!"
)

:process_css

echo.
echo Searching for .css.map files in %cd% ...
echo.

rem Collect all .css.map files recursively
set count=0
for /r %%F in (*.css.map) do (
    set /a count+=1
    echo [!count!] %%F
    set "file[!count!]=%%F"
)

if %count%==0 (
    echo No .css.map files found.
    pause
    exit /b
)

echo.
set /p choice=Delete all %count% .css.map files? (Y/N): 
if /i not "%choice%"=="Y" (
    echo Aborted.
    exit /b
)

echo.
echo Deleting files...
for /l %%I in (1,1,%count%) do (
    del /f /q "!file[%%I]!"
)
echo Done.
pause

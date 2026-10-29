# 在桌面创建「宝可德语」快捷方式（Windows）
# 用法：powershell -NoProfile -ExecutionPolicy Bypass -File tools/create-shortcut.ps1
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$desktop = [Environment]::GetFolderPath("Desktop")
$lnkPath = Join-Path $desktop "宝可德语.lnk"

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($lnkPath)
$shortcut.TargetPath = Join-Path $root "start.bat"
$shortcut.WorkingDirectory = $root
$shortcut.IconLocation = (Join-Path $root "assets\img\favicon.ico") + ",0"
$shortcut.Description = "宝可德语 · PokéDeutsch — 和宝可梦一起从零学德语"
$shortcut.WindowStyle = 7   # 最小化运行，服务器窗口不会挡住桌面
$shortcut.Save()

Write-Output "已创建：$lnkPath"

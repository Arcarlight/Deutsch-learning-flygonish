"""把中文字体裁剪成只包含站点实际用到的字符，输出 woff2。
用法: python tools/subset-fonts.py
依赖: pip install fonttools brotli
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = {
    "lxgw": ROOT / "tools" / "fonts-src" / "LXGWWenKai-Regular.ttf",
    "zcool": ROOT / "tools" / "fonts-src" / "ZCOOLKuaiLe.ttf",
}
OUT = {
    "lxgw": ROOT / "assets" / "fonts" / "lxgw-wenkai-subset.woff2",
    "zcool": ROOT / "assets" / "fonts" / "zcool-kuaile-subset.woff2",
}
# 额外保留：ASCII、德语变元音、中英文标点
BASE = (
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    "äöüÄÖÜß"
    ".,;:!?'\"()[]{}<>/|+-=*&%$#@~^_`"
    "，。、；：！？“”‘’（）【】《》—…·「」『』"
)
# 扫描站点文件里出现的所有字符
PAT = re.compile(r"[\u3000-\u303f\u4e00-\u9fff\uff00-\uffef\u2010-\u2027\u2030-\u205e\u00a0-\u00ff]")
chars = set(BASE)
for folder in ["", "css", "js", "data", "docs"]:
    base = ROOT / folder if folder else ROOT
    for path in base.rglob("*"):
        if path.is_file() and path.suffix in {".html", ".js", ".css", ".md"} and "_recon" not in path.parts:
            try:
                for ch in PAT.findall(path.read_text(encoding="utf-8")):
                    chars.add(ch)
            except Exception:
                pass
text = "".join(sorted(chars))
print("unique chars:", len(text))

for key, src in SRC.items():
    if not src.exists():
        print("skip (missing):", src)
        continue
    out = OUT[key]
    cmd = [
        sys.executable, "-m", "fontTools.subset", str(src),
        "--text=" + text,
        "--flavor=woff2",
        "--output-file=" + str(out),
        "--layout-features=*",
        "--no-hinting",
        "--desubroutinize",
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("FAIL", key, res.stderr[-800:])
    else:
        print(f"{key}: {src.stat().st_size / 1e6:.1f}MB -> {out.stat().st_size / 1024:.0f}KB")

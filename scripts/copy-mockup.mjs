// 목업 원본(../index.html)을 public/mockup/으로 복사한다.
// 원본은 한 곳에서만 고치고, dev·build 직전에 자동으로 따라오게 한다.
// 원본이 없는 곳(GitHub Actions 등)에서는 이미 들어 있는 public/mockup/을 그대로 쓴다.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = resolve(root, '..', 'index.html')
const dest = resolve(root, 'public', 'mockup', 'index.html')

if (!existsSync(src)) {
  if (!existsSync(dest)) {
    console.error('[sync-mockup] ../index.html도 public/mockup/index.html도 없습니다.')
    process.exit(1)
  }
  console.log('[sync-mockup] 원본이 없어 public/mockup/index.html을 그대로 씁니다.')
  process.exit(0)
}

mkdirSync(dirname(dest), { recursive: true })
copyFileSync(src, dest)
console.log('[sync-mockup] ../index.html -> public/mockup/index.html')

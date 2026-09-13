# 든든뱅크 안심송금

경찰청 사기 의심 계좌 정보와 행동경제학 넛지로 송금 직전에 보이스피싱을 막는 시니어용 뱅킹 UI 목업과 소개 사이트입니다.

시니어노믹스 · P-커리어캐치Ⅱ · 2026-2학기. **시연용 목업이며 실제 계좌 조회나 송금은 하지 않습니다.**

- 사이트: https://basori-tiaraa.github.io/ddbank/
- 목업만 보기: https://basori-tiaraa.github.io/ddbank/mockup/

## 화면 흐름

| 단계 | 내용 |
|---|---|
| 탐지 | 계좌번호를 넣으면 녹색·황색·적색 신호등으로 위험도 표시 |
| 지연 | 적색 계좌로 고액 송금 시 확인 버튼을 없애고 "경찰청 112 피싱 의심" 문구를 직접 입력하게 함 |
| 구출 | 원터치 안심 버튼으로 송금을 멈추고 112·1332에 바로 연결 |

## 개발

```bash
npm install
npm run dev
```

React 19 · Vite · motion · lucide-react. `main`에 푸시하면 GitHub Actions가 빌드해서 Pages로 배포합니다.

목업 원본은 `public/mockup/index.html` 한 파일이고, 사이트는 이를 iframe으로 불러옵니다(`?embed=1`, `?demo=1`, `?s=safe|warn|danger`).

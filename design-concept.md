# Design concept — ПРАЙД барбершоп, Архангельск

## Client / project

- Name: ПРАЙД барбершоп, Архангельск
- Date: 2026-11-12
- Niche: независимый мужской барбершоп / клуб приятелей в северном городе (не франшиза)
- Concept-ID: 2026-11-12-pride-contact-sheet-v3
- Composition-archetype: filmstrip-process
- Forbidden-for-this-niche: ticket-stub-ledger / бланк-талон; workshop-protocol секции; quiet-luxury black/cream/gold; Tilda funnel hero→features→prices→form; purple/indigo gradients; cream `#F4F1EA`+terracotta+serif; broadsheet hairline-газеты; dark neon SaaS; hero+3 feature-cards; черепа/pole/«настоящие мужики»-клише франшиз; тёмный full-bleed barbershop-hero как единственный жест
- Delta-from-previous: archetype ticket-stub-ledger → filmstrip-process; вместо одного бумажного бланка с корешком — контакт-лист / киноплёнка визита (кадры 01…N); палитра со светлого «северного бланка» (`#B8C3CD`/`#E6E2DA`/кофе) → холодный light-table + чёрные рамки эмульсии + сталь машинки; тип Onest/Golos/Plex Mono → Unbounded + Manrope + Spline Sans Mono; IA: вертикальный «документ» → горизонтально-ведущая лента кадров процесса + вертикальные главы-врезки; CTA = «следующий кадр / запись», не отрывной stub

## Niche fingerprint

- Ритуал: онлайн/телефон запись → лифт ТЦ «Вертикаль» → 3 этаж, отдел 3.07 → кресло → стрижка/борода/бритьё → чай или кофе и разговор → выход с формой; повтор к «своему» мастеру
- Материалы: машинка и нумерованные насадки, бритва, глина/паста для укладки, фартук, керамическая кружка, зеркало зала, бланк/слот записи (как факт, не как UI-метафора сайта)
- Место / свет: Архангельск, холодный дневной северный свет с улицы + ровный свет зала в ТЦ; не особняк и не «тёмный клуб с неонами»
- Vernacular: «без подхалимства», «приятели», «смена», прайс на стене, 2ГИС-рейтинг, VK `pride_arh`, Dikidi/Tilda-запись, курс «Барбер с нуля»
- Сенсорика: жужжание машинки, запах глины/кофе, тепло кресла, ритм кадров в зеркале (до → во время → после)
- Объекты-якоря: кресло + рука с машинкой + готовая линия на затылке — последовательность, а не один «luxury portrait»

## Unique thesis

1. Mood: северный контакт-лист смены — спокойная ремесленная плёнка, клуб приятелей без франшизного пафоса и без канцелярского бланка
2. Type rationale: Unbounded — крупный «титр катушки» PRIDE (как маркировка ролика, не квитанция); Manrope — живые короткие фразы по-русски; Spline Sans Mono — номера кадров, цены, часы, edge-code (время/адрес), не поля формы
3. Palette logic (from materials/light): фон light-table / северное окно `#C5CDD6`; рамка кадра-эмульсия `#121416`; сталь машинки `#6E7882`; белые подписи на кадре `#F3F5F7`; лидер/CTA янтарь химреактива `#B56A2C` только на записи и акцентных метках — без кремовой бумаги и без золота
4. Composition: filmstrip-process — весь сайт читается как непрерывная лента кадров визита (прибыл → сел → работа → форма → запись); вертикаль = главы-врезки (мастера, прайс, место), но главный жест — плёнка
5. Motion: Level A — горизонтальный scrub ленты, счётчик кадров, лёгкий gate/parallax внутри кадра; без WebGL/фейк-3D; `prefers-reduced-motion` → статичный вертикальный стек кадров
6. Main gesture: сайт = контакт-лист визита в PRIDE (плёнка процесса), а не лендинг услуг и не талон записи

## Anti-clone checklist

- [x] Carryover: сломан скелет v2 (единый бланк + отрывной корешок + поля «реквизитов»); другая архетипная композиция и палитра/тип
- [x] Benchmark clone: не копируем Blind Barber anniversary (мозаика истории бренда) и не N. Fadez editorial hero + team grid — берём только планку качества последовательности/записи
- [x] AI clusters: нет purple-gradient / cream+#F4F1EA+terracotta / broadsheet / dark neon SaaS / hero+3 cards / quiet-luxury black-cream-gold
- [x] Brand test: без лого и с чужими фото это всё ещё «плёнка мужской стрижки/процесса в северном зале», а не пекарня, юрист, детейлинг или bridal

## Palette + type

- Palette:
  - light-table / page `#C5CDD6` — северное окно + стол просмотра контактов
  - emulsion / frame `#121416` — чёрная рамка кадра
  - steel `#6E7882` — машинка, перфорация
  - caption white `#F3F5F7` — подписи на кадре
  - ink on table `#1A1F24` — текст вне кадра
  - leader / CTA `#B56A2C` — хим. лидер плёнки / кофейный акцент только на действие
  - rule `#9AA3AD` — тонкие разделители ленты
- Type:
  - Unbounded (800–900) — титр PRIDE / названия катушек
  - Manrope (400–700) — фразы, отзывы, о клубе
  - Spline Sans Mono (400–600) — № кадра, ₽, телефон, часы, edge-code адреса

## Primary benchmark

- URL: https://anniversary.blindbarber.com/
- Quality bar only: дисциплина последовательности кадров, типографический ритм и уважение к фото как к носителю истории — не копировать ретро-мозаику юбилея, палитру или структуру «история бренда»

## Secondary benchmarks (quality only)

- https://nfadezbarberstudio.com — ясность записи к мастеру и gallery-first proof of craft (не hero/сетку)
- https://www.bonefadebarbers.com/ — короткое lifestyle-позиционирование без карточного SaaS (не клонировать dark club look)

## Interactivity plan (pre-build)

- Level: **A — Advanced 2D** (не B/C): барбершоп продаёт руку и атмосферу кадрами; фейк-3D кресла не добавляет доверия и бьёт по perf/мобилке
- Stack intent (после approval, не сейчас): существующий static HTML/CSS/JS или лёгкий Vite без React-обязаловки; GSAP ScrollTrigger + опционально Lenis; SVG перфорация/рамки; без Three.js/R3F
- Materials still useful: текущие `film-*` и `protocol-*`; 4–8 новых последовательных кадров «одна стрижка» если появятся из VK; стабильная ссылка онлайн-записи (Dikidi/Tilda); карта/схема 3 этажа текстом

## Site IA (for later build — not implemented now)

1. Film head / hero-frame: PRIDE + одна фраза + CTA + доминирующий кадр зала/работы
2. Strip «Визит»: горизонтальные кадры 01–04+
3. Works reel: контакт-лист портфолио
4. Masters: выбор кадра-мастера → запись
5. Rate card: цены как edge-data
6. Place: Вертикаль / 3 этаж / телефоны / часы
7. Course (вторично): «Барбер с нуля»
8. Persistent: запись + телефон

## Archive / restore

- Previous live concept archived at: `archive/v2-ticket-stub-ledger/` (+ `design-concept.prev.md`, `design-concept.v2-ticket-stub-ledger.md`)
- Root `index.html` / `styles.css` / `script.js` = **v3 live** (filmstrip-process, Concept-ID `2026-11-12-pride-contact-sheet-v3`), approved and built 2026-11-12
- Stack: static HTML/CSS/JS + GSAP ScrollTrigger (CDN); no Three.js; GitHub Pages from repo root

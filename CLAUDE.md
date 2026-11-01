<!-- omd:start v=1 hash=a0905ab87d60 -->
# Design System (oh-my-design)

Read the standalone design contract at **@./DESIGN.md** before any UI,
styling, microcopy, or motion work. When a valid adopted Core v2
`.omd/system/manifest.json` declares `profile: portable-core` and binds exact
graph/projection hashes, the System Graph is machine authority and DESIGN.md is
its standalone projection. A migration candidate is never adopted authority.

Preference log (pending corrections): @./.omd/preferences.md

Precedence: pending explicit preference corrections > adopted Bound System
graph/standalone DESIGN.md > your defaults. Fold pending corrections into the
graph and regenerate the projection before clearing them.
<!-- omd:end -->

# 배포 규칙 (프로젝트 주인 지시, 2026-11-01)

- 사이트 수정은 작업 브랜치에만 올린다. 클라우드플레어는 `release` 브랜치에 올라온 것만 배포한다.
- 작업을 마칠 때마다 "배포할까요?"라고 프로젝트 주인에게 물어본다.
- 주인이 "배포해"라고 답한 경우에만 작업 브랜치 내용을 `release`에 올린다. 허락 없이 `release`에 올리지 않는다.

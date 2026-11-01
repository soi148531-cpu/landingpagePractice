<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- omd:start v=1 hash=fcd83d14cd18 -->
## Design System (oh-my-design)

**Before any UI, styling, copy, or motion change, open and read `./DESIGN.md` in full.** It is the standalone design contract. If an exact valid adopted Core v2 manifest exists, its hash-bound System Graph is machine authority and DESIGN.md is the projection. A migration candidate remains non-authoritative.

If present, read `./.omd/preferences.md` — pending explicit corrections override the current contract until atomically folded into the graph/projection. Apply them and flag conflicts.
<!-- omd:end -->

## 배포 규칙 (프로젝트 주인 지시, 2026-11-01)

- 사이트 수정은 작업 브랜치에만 올린다. 클라우드플레어는 `release` 브랜치에 올라온 것만 배포한다.
- 작업을 마칠 때마다 "배포할까요?"라고 프로젝트 주인에게 물어본다.
- 주인이 "배포해"라고 답한 경우에만 작업 브랜치 내용을 `release`에 올린다. 허락 없이 `release`에 올리지 않는다.

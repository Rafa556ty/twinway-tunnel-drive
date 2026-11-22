<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- `src/game/` holds the Supercar Highway Dash game ported from its published build; `game.tsx`, `render3d.ts`, `models3d.ts` and siblings are de-minified bundles (`@ts-nocheck`), so make surgical edits there and put new features in typed modules beside them (`highway-layout.ts`, `twin-tunnel.ts`, `scenery.ts`). Why: rewriting the bundles risks breaking gameplay that has no source.
- Map layout distances (loop length, highway/tunnel/bridge spans, oncoming-carriageway offsets) live in `src/game/highway-layout.ts` with tests in `highway-layout.test.ts`. Why: render code and tests share one source of truth.
- Game media (GLB models, audio, images) are Lovable Assets pointers in `src/game/assets/`; code references their CDN URLs. Why: keeps 150 MB of binaries out of the repo.
- `src/styles.css` is the original game's compiled Tailwind output, not a Tailwind source file. Why: the UI was ported as compiled CSS; new utility classes will not be generated unless Tailwind is re-enabled there.

import { createFileRoute } from "@tanstack/react-router";
import { component as Game } from "@/game/game";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supercar Highway Dash — Jogo de Corrida" },
      {
        name: "description",
        content:
          "Pilote supercarros pela rodovia de pista dupla, atravesse o túnel e fuja da polícia.",
      },
      { property: "og:title", content: "Supercar Highway Dash — Jogo de Corrida" },
      {
        property: "og:description",
        content:
          "Pilote supercarros pela rodovia de pista dupla, atravesse o túnel e fuja da polícia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Game,
});

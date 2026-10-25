// Template stylesheets, served from public/assets so their relative url()s keep working.
const STYLESHEETS = [
  "/assets/css/bootstrap.css",
  "/assets/css/swiper-bundle.css",
  "/assets/css/magnific-popup.css",
  "/assets/css/font-awesome-pro.css",
  "/assets/css/animate.css",
  "/assets/css/spacing.css",
  "/assets/css/main.css",
];

export default function ThemeHead() {
  return (
    <head>
      <link rel="icon" type="image/png" href="/assets/img/afa-favicon.png" />
      {STYLESHEETS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </head>
  );
}

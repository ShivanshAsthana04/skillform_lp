let tl = gsap.timeline({ defaults: { ease: "Power4.inOut", duration: 2 } });
let flagpoles = CSSRulePlugin.getRule(".card::before");
tl.to("h1", {
  "clip-path": "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
  opacity: 1,
  y: 0,
  duration: 2.2,
})
  .to(
    ".form",
    {
      "clip-path": "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=2 "
  )
  .from(".card", { scaleY: 0, stagger: 0.2 }, "-=2")
  .from(
    flagpoles,
    { stagger: 0.2, opacity: 0, transform: "translateY(100px)" },
    "-=2"
  ).to(
    '.title,.desc',{stagger:.1,y:0,opacity:1}
  ).to(
    'footer',{opacity:1,transform:'translateY(0)'},"-=2"
  )

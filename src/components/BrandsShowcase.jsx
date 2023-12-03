import LinkButton from "./shared/LinkButton";
import Quote from "./shared/Quote";
import SectionHeading from "./shared/SectionHeading";

const BrandsShowcase = () => {
  const brands = [
    "https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png",
    "https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png",
    "https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png",
    "https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png",
    "https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png",
    "https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png",
    "https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png",
    "https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png",
    "https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png  ",
    "https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png",
    "https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png",
    "https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png",
    "https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png",
    "https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png",
  ];
  return (
    <section
      id="brands"
      className="flex flex-col max-w-screen-md mx-auto items-center mt-16 p-4 md:p-0"
    >
      <SectionHeading>Millions run on Notion every day</SectionHeading>
      <p className="max-w-md text-center">
        Powering the {"world's"} best teams, from next-generation startups to
        established enterprises.
      </p>
      <LinkButton>Read customer stories</LinkButton>
      <div className="flex gap-x-4 gap-y-6 items-center flex-wrap justify-center mt-8 mb-16 ">
        {brands.map((brand, index) => (
          <img key={`brand-image-${index}`} src={brand} className="h-8" />
        ))}
      </div>
      <SectionHeading>
        Consolidate tools.
        <br />
        Cut costs.
      </SectionHeading>
      <div className="relative max-w-xl ">
        <img
          className="hidden md:block ml-8"
          id="toolsStrikethroughV2Png"
          loading="lazy"
          width="613"
          height="50"
          decoding="async"
          data-nimg="1"
          style={{ color: "transparent" }}
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/tools-strikethrough-V2.png"
        />
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1200/front-static/pages/home/tools-before-notion-V2.png"
          alt=""
        />
        <img
          className="absolute hidden md:block -right-32 -top-40 h-40"
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/giant-pencil-illustration.png"
          alt=""
        />
      </div>

      <Quote
        quoteText={
          "We got rid of nearly a dozen different tools because of what Notion does for us."
        }
        author={"Justin Watt"}
        authorDesignation={"Director of Ops & Marketing, MetaLab"}
        logoUrl={
          "https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/shared/logos/color/metalab.png"
        }
      />
    </section>
  );
};

export default BrandsShowcase;

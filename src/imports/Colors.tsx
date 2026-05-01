function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start leading-[0] left-[32px] not-italic top-[19px] w-[446px]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#171717] text-[46px] w-full">
        <p className="leading-[52px]">Colors</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6a6a] text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">All colors, using Google Slides colors for the base and changing it for the MindHive Website</p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[24px]">{`The color naming follows semantic conventions used in other design systems such as `}</span>
          <a className="cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic" href="https://daisyui.com/docs/colors/">
            <span className="leading-[24px]" href="https://daisyui.com/docs/colors/">
              daisyUI
            </span>
          </a>
          <span className="leading-[24px]">{`, `}</span>
          <a className="cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic" href="https://developer.apple.com/design/human-interface-guidelines/color">
            <span className="leading-[24px]" href="https://developer.apple.com/design/human-interface-guidelines/color">
              Apple’s Developer Documentation
            </span>
          </a>
          <span className="leading-[24px]">{`, `}</span>
          <a className="cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic" href="https://m3.material.io/styles/color/roles">
            <span className="leading-[24px]" href="https://m3.material.io/styles/color/roles">
              Material Design
            </span>
          </a>
          <span className="leading-[24px]">{` & `}</span>
          <a className="cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic" href="https://getbootstrap.com/docs/5.3/customize/color/">
            <span className="leading-[24px]" href="https://getbootstrap.com/docs/5.3/customize/color/">
              Bootstrap
            </span>
          </a>
          <span className="leading-[24px]">.</span>
        </p>
      </div>
    </div>
  );
}

function PrimaryDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] not-italic top-[657px] w-[400px]" data-name="Primary -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">Primary</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="leading-[24px]">To use when building first level UI elements. This should follow the brand color and is useful for most buttons and interactions.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[400px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">How to read this page</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="leading-[24px]">This page will have the color’s semantic name, a description, and then present the different shades of that color.</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px] whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">{`Shades: Darker → Base →  Lighter`}</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="mb-0">The base shade is the one to be most commonly used and serves as the basis of that color. Lighter shades are useful to de-emphasize actions or serve as background containers. Darker shades can be useful for text or outlines.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">The shades should have enough contrast to be distinguishable between each other.</p>
        <p className="mb-0">&nbsp;</p>
        <p>If you need additional colors in-between these shades, change the lightness of the closest shade.</p>
      </div>
    </div>
  );
}

function HowToRead() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-[32px] not-italic top-[311px]" data-name="How to read">
      <Frame22 />
      <Frame21 />
    </div>
  );
}

function SecondaryDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] not-italic top-[1675px] w-[400px]" data-name="Secondary -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">Secondary</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6a6a] text-[0px] w-full">
        <p className="text-[16px]">
          <span className="leading-[24px]">To use for secondary action UI elements (e.g., “Copy link”). This is a color used more sparingly.</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">{` It should represent the secondary brand color.`}</span>
          <span className="leading-[24px]">{` [this definition & its usage are subject to change, revisions or to be deprecated]`}</span>
        </p>
      </div>
    </div>
  );
}

function TertiaryDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] not-italic top-[1947px] w-[400px]" data-name="Tertiary -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">Tertiary</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6a6a] text-[0px] w-full">
        <p className="text-[16px]">
          <span className="leading-[24px]">{`This is the “old” MindHive color and as such represents the `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">{`tertiary `}</span>
          <span className="leading-[24px]">brand color. Reserved mainly for background, tags, or some buttons.</span>
        </p>
      </div>
    </div>
  );
}

function NeutralDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] not-italic top-[2201px] w-[400px]" data-name="Neutral -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">Neutrals</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#6a6a6a] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`These are grays and very light shades! Useful for text with high (black), and lower emphasis (dark). Can be used for outlines in their darker shades and backgrounds in their lighter ones. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>The light-green is used as a container color that can separate UI sections.</p>
      </div>
    </div>
  );
}

function InformationDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] not-italic top-[1431px] w-[400px]" data-name="Information -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">Information / Additional Accent</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="leading-[24px]">Can be used for “information” popups that should be emphasized but don’t need to convey “danger”.</p>
      </div>
    </div>
  );
}

function WarningDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[35px] not-italic top-[1173px] w-[400px]" data-name="Warning -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[28px] relative shrink-0 text-[#171717] text-[22px] w-full">Warning / Danger</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="leading-[24px]">Used for warning or popups that symbolize potentially dangerous actions or notifications that need to be address. Red’s meaning and connotations can change between cultures.</p>
      </div>
    </div>
  );
}

function AccentDescription() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[915px] w-[400px]" data-name="Accent -> Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#171717] text-[22px] w-full">Accent</p>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[22px] relative shrink-0 text-[#6a6a6a] text-[17px] w-full whitespace-pre-wrap">
        <p className="mb-0">This is an alternative to primary for high-emphasis actions. Useful in first-level UI elements that might be equally important.</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Due to the nature of the color, it must be used in combination with black or very bold white text `}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#337C84</p>
    </div>
  );
}

function PrimaryDark() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#336f8a] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#69BBC4</p>
    </div>
  );
}

function PrimaryBase() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#69bbc4] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#A3D6DB</p>
    </div>
  );
}

function PrimaryMedium() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#a3d6db] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#DEF8FB</p>
    </div>
  );
}

function PrimaryLight() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#def8fb] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame3 />
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[459px] top-[657px]" data-name="Primary">
      <PrimaryDark />
      <PrimaryBase />
      <PrimaryMedium />
      <PrimaryLight />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5763]">#5D5763</p>
    </div>
  );
}

function PrimaryDark1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#5d5763] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#F2BE42</p>
    </div>
  );
}

function PrimaryBase1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#f2be42] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#F9D978</p>
    </div>
  );
}

function PrimaryMedium1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#f9d978] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#FDF2D0</p>
    </div>
  );
}

function PrimaryLight1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#fdf2d0] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame7 />
    </div>
  );
}

function Accent() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[459px] top-[915px]" data-name="Accent">
      <PrimaryDark1 />
      <PrimaryBase1 />
      <PrimaryMedium1 />
      <PrimaryLight1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#8F1F14</p>
    </div>
  );
}

function PrimaryDark2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#8f1f14] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#B9261A</p>
    </div>
  );
}

function PrimaryBase2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#b9261a] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#CF6D6A</p>
    </div>
  );
}

function PrimaryMedium2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#cf6d6a] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#FEECEB</p>
    </div>
  );
}

function PrimaryLight2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#edcecd] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Lighter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#FEECEB</p>
    </div>
  );
}

function PrimaryLight3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#ffefee] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame12 />
    </div>
  );
}

function Warning() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[459px] top-[1173px]" data-name="Warning">
      <PrimaryDark2 />
      <PrimaryBase2 />
      <PrimaryMedium2 />
      <PrimaryLight2 />
      <PrimaryLight3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#3F288F</p>
    </div>
  );
}

function PrimaryDark3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#3f288f] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#7D70AD</p>
    </div>
  );
}

function PrimaryBase3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#6f26ce] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#A090E0</p>
    </div>
  );
}

function PrimaryMedium3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#d8d3e7] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#E4DFF6</p>
    </div>
  );
}

function PrimaryLight4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#f5f2ff] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame16 />
    </div>
  );
}

function AdditionalAccent() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[459px] top-[1431px]" data-name="Additional Accent">
      <PrimaryDark3 />
      <PrimaryBase3 />
      <PrimaryMedium3 />
      <PrimaryLight4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#07365F</p>
    </div>
  );
}

function PrimaryDark4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#07365f] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#0B5394</p>
    </div>
  );
}

function PrimaryBase4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#0b5394] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#3D85B0</p>
    </div>
  );
}

function PrimaryMedium4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#3d85b0] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame19 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#D3E2F1</p>
    </div>
  );
}

function PrimaryLight5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#d3e2f1] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Lighter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#D3E2F1</p>
    </div>
  );
}

function PrimaryLight6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#e6f1f9] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame24 />
    </div>
  );
}

function Secondary() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[459px] top-[1689px]" data-name="Secondary">
      <PrimaryDark4 />
      <PrimaryBase4 />
      <PrimaryMedium4 />
      <PrimaryLight5 />
      <PrimaryLight6 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#0D3944</p>
    </div>
  );
}

function PrimaryDark5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#0d3944] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#55808C</p>
    </div>
  );
}

function PrimaryBase5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#55808c] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#D3E0E3</p>
    </div>
  );
}

function PrimaryMedium5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#d3e0e3] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#F6F9F8</p>
    </div>
  );
}

function PrimaryLight7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#f6f9f8] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame28 />
    </div>
  );
}

function Tertiary() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[459px] top-[1947px]" data-name="Tertiary">
      <PrimaryDark5 />
      <PrimaryBase5 />
      <PrimaryMedium5 />
      <PrimaryLight7 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Black</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#171717</p>
    </div>
  );
}

function PrimaryDark6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#171717] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#6A6A6A</p>
    </div>
  );
}

function PrimaryBase6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#6a6a6a] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#A1A1A1</p>
    </div>
  );
}

function PrimaryMedium6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#a1a1a1] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#E6E6E6</p>
    </div>
  );
}

function PrimaryLight8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#e6e6e6] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Lighter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#F3F3F3</p>
    </div>
  );
}

function PrimaryLight9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#f3f3f3] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">White</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#FFFFFF</p>
    </div>
  );
}

function PrimaryLight10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-white h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light - Green</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#F6F9F8</p>
    </div>
  );
}

function PrimaryLight11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#f6f9f8] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame35 />
    </div>
  );
}

function Neutrals() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[24px] items-center left-[459px] top-[2205px] w-[1041px]" data-name="Neutrals">
      <PrimaryDark6 />
      <PrimaryBase6 />
      <PrimaryMedium6 />
      <PrimaryLight8 />
      <PrimaryLight9 />
      <PrimaryLight10 />
      <PrimaryLight11 />
    </div>
  );
}

export default function Colors() {
  return (
    <div className="bg-white relative size-full" data-name="Colors">
      <Frame20 />
      <PrimaryDescription />
      <HowToRead />
      <SecondaryDescription />
      <TertiaryDescription />
      <NeutralDescription />
      <InformationDescription />
      <WarningDescription />
      <AccentDescription />
      <Primary />
      <Accent />
      <Warning />
      <AdditionalAccent />
      <Secondary />
      <Tertiary />
      <Neutrals />
    </div>
  );
}
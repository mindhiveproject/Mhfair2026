function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Dark</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#3F288F</p>
    </div>
  );
}

function PrimaryDark() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Dark">
      <div className="bg-[#3f288f] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#7D70AD</p>
    </div>
  );
}

function PrimaryBase() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Base">
      <div className="bg-[#6f26ce] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#A090E0</p>
    </div>
  );
}

function PrimaryMedium() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Medium">
      <div className="bg-[#d8d3e7] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[24px] not-italic pb-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">Light</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6a6a6a]">#E4DFF6</p>
    </div>
  );
}

function PrimaryLight() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative rounded-[8px] shrink-0 w-[160px]" data-name="Primary/Light">
      <div className="bg-[#f5f2ff] h-[140px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[160px]" data-name="Rectangle" />
      <Frame3 />
    </div>
  );
}

export default function AdditionalAccent() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full" data-name="Additional Accent">
      <PrimaryDark />
      <PrimaryBase />
      <PrimaryMedium />
      <PrimaryLight />
    </div>
  );
}
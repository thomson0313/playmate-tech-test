"use client";

export default function HoldersAreaPage() {

  return (
    <div className="flex flex-col gap-4 p-4 pt-[72px]">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-4 w-full">
          <div className="mb-5">It is the best top ranked LP chart from dexscreener. Visit https://dexscreener.com/</div>
          <div
            id="dexscreener-embed"
            className="min-h-[800px] md:min-h-0 rounded-lg border overflow-hidden"
          >
            <iframe src="https://dexscreener.com/ethereum/0xfdd05552f1377aa488afed744c8024358af02041?embed=1&theme=dark&info=0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

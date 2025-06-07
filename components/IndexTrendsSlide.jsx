"use client"
import Image from 'next/image'

const IndexTrendsSlide = ({ trendInfo }) => {
  const formatNumber = (number) => {
    const suffixes = ['', 'K', 'M', 'B', 'T']
    const base = 1000
    if (number === 0) return '0'
    number = Math.abs(number)
    const exp = Math.min(Math.floor(Math.log(number) / Math.log(base)), suffixes.length - 1)
    const scaled = number / Math.pow(base, exp)
    const formatted = scaled.toFixed(2).replace(/\.?0+$/, '')
    return `${formatted}${suffixes[exp]}`
  }
  const convertedPlayedCount = formatNumber(trendInfo.playedCount)
  const handleClick = () => {}

  return (
    <div className="relative w-full h-full">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--main-background)] to-transparent z-20" />
      {/* background image */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={trendInfo.coverImage}
        width={1920}
        height={1080}
        loading="eager"
        alt={`${trendInfo.name} cover`}
      />
      {/* content */}
      <div className="relative z-30 pt-[130px] pr-[100px] pl-[80px]">
        <span className="block text-base font-semibold text-white mb-10">
          Trending New Hits
        </span>
        <span className="block text-[50px] font-extrabold text-white mb-[10px]">
          {trendInfo.name}
        </span>
        <div className="flex items-center gap-[10px] mb-[25px]">
          <span className="text-base font-normal text-white">
            {trendInfo.artist}
          </span>
          <span className="text-base font-normal text-white/60">
            {convertedPlayedCount}
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          {/* {music?.id === trendInfo.id ? (
            <MainButton type="primary" round>
              Listening...
            </MainButton>
          ) : (
            <MainButton type="primary" round onClick={handleClick}>
              Listen Now
            </MainButton>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default IndexTrendsSlide
import { ImageResponse } from '@vercel/og'

export const runtime = "edge"

export default async function handler() {

  const memoryUsage = process.memoryUsage()

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full text-7xl justify-between">
          <div tw="flex flex-row w-full justify-around text-8xl">process.memoryUsage()</div>
          <div tw="flex flex-row w-full justify-between bg-red-500">
            <div tw="flex ">residentSetSize</div>
            <div tw="flex">{memoryUsage.rss.toLocaleString()}</div>
          </div>
          <div tw="flex flex-row w-full justify-between">
            <div tw="flex ">heapTotal</div>
            <div tw="flex">{memoryUsage.heapTotal.toLocaleString()}</div>
          </div>
          <div tw="flex flex-row w-full justify-between">
            <div tw="flex ">heapUsed</div>
            <div tw="flex">{memoryUsage.heapUsed.toLocaleString()}</div>
          </div>
          <div tw="flex flex-row w-full justify-between bg-orange-500">
            <div tw="flex ">external</div>
            <div tw="flex">{memoryUsage.external.toLocaleString()}</div>
          </div>
          <div tw="flex flex-row w-full justify-between">
            <div tw="flex ">arrayBuffers</div>
            <div tw="flex">{memoryUsage.arrayBuffers.toLocaleString()}</div>
          </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

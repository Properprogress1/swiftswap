"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
    { time: "January", BTC: 30000, ETH: 18000, LTC: 10000 },
    { time: "February", BTC: 25000, ETH: 25000, LTC: 15000 }, // Intersection point 1
    { time: "March", BTC: 18000, ETH: 30000, LTC: 18000 }, // Intersection point 2
    { time: "April", BTC: 15000, ETH: 15000, LTC: 30000 }, // Intersection point 3
    { time: "May", BTC: 22000, ETH: 20000, LTC: 25000 },
    { time: "June", BTC: 30000, ETH: 15000, LTC: 20000 },

]

const chartConfig = {
    btc: {
        label: "BTC",
        color: "hsl(var(--chart-1))",
    },
    eth: {
        label: "ETH",
        color: "hsl(var(--chart-2))",
    },
    ltc: {
        label: "LTC",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export function CoinChart() {
    return (

        <ChartContainer config={chartConfig}>
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="time"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                    dataKey="BTC"
                    type="monotone"
                    stroke="#FB49C0"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    dataKey="ETH"
                    type="monotone"
                    stroke="#31AFD6"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    dataKey="LTC"
                    type="monotone"
                    stroke="#F5A623"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>

    )
}

export default CoinChart
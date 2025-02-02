"use client";

import { Card } from "@/components/ui/card";
import { CloudSunIcon, ArrowRight, MapPinIcon, Newspaper, Landmark, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Weather",
        icon: CloudSunIcon,
        href: "https://trip-plan-weather.netlify.app/",
        color: "text-cyan-300",
        bgColor: "bg-cyan-300/10"
    },
    {
        label: "News",
        icon: Newspaper,
        href: "https://trip-plan-news.netlify.app/",
        color: "text-rose-300",
        bgColor: "bg-rose-300/10"
    },
    {
        label: "Directions",
        icon: MapPinIcon,
        href: "https://trip-plan-maps.netlify.app/",
        color: "text-blue-300",
        bgColor: "bg-blue-300/10"
    },
]
const DashboardPage = () => {
    const router = useRouter();
    return(
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
                Trip Your Plan Easily.
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                For your trip all the resources you need is in one place.
            </p>
            <div className="px-4 py-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card 
                    onClick={() => router.push(tool.href)}
                    key={tool.href} 
                    className="p-4 border-black/5 flex items-center justify-between hover:shadow-md hover:bg-slate-100 transition cursor-pointer">
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md ", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5"/>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default DashboardPage; 
  
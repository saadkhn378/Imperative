import { ArrowRight } from "lucide-react"

// Helper function to conditionally join classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

function ServiceCard(props) {
  const { title, description, icon, className, isMobile } = props

  return (
    <div
      className={cn(
        "flex border border-[#f97316] bg-gray-100",
        isMobile
          ? "flex-col text-center px-4 py-5 rounded-[30px] w-full h-[400px]"
          : "items-center px-5 py-6 rounded-[60px] w-[500px] h-[300px]",
        className,
      )}
    >
      <div className={cn("flex-shrink-0", isMobile ? "mb-4" : "")}>
        <div
          className={cn(
            "flex items-center justify-center border border-[#f97316] bg-white",
            isMobile ? "h-[120px] w-[100px] rounded-[30px] mx-auto" : "h-[200px] w-[120px] rounded-[60px] mr-6",
          )}
        >
          <span className="flex items-center justify-center">{icon}</span>
        </div>
      </div>
      <div className={cn("flex-1 flex flex-col", isMobile ? "w-full h-full" : "h-full")}>
        <h2 className={cn("font-bold text-black mb-2", isMobile ? "text-lg" : "text-xl")}>{title}</h2>
        <p
          className={cn(
            "text-black mb-4 flex-grow overflow-y-auto",
            isMobile ? "text-xs line-clamp-6" : "text-sm line-clamp-5",
          )}
        >
          {description}
        </p>
        <div
          className={cn(
            "flex items-center font-semibold text-[#f97316] group cursor-pointer select-none w-max",
            isMobile ? "mx-auto text-sm mt-auto mb-2" : "mt-auto",
          )}
        >
          <span className="tracking-wide">EXPLORE MORE</span>
          <ArrowRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={isMobile ? 16 : 18}
            strokeWidth={2.2}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard

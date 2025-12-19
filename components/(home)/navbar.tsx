import { NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
	navigationMenuTriggerStyle, 
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="border-b">
			<div className="flex h-16 items-center px-40 container mx-auto">
				{/* Left side - Logo */}
				<Link href="/" className="font-bold text-3xl mr-8">
					GymSpot
				</Link>

				{/* Right side - Navigation */}
				<div className="ml-auto flex items-center gap-4">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
									<Link href="/add-gym">
										Add Gym
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						
							<NavigationMenuItem>
								<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
									<Link href="/register">
										Register
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						
							<NavigationMenuItem>
								<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
									<Link href="/login">
										Login
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</nav>
	);
}

import { adminRoutes } from "./adminRoutes";
import { sellerRoutes } from "./sellaerRoutes";


export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes,
]
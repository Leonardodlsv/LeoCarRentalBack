import {CorsOptions} from "cors"

const corsOptions: CorsOptions = {
    methods: ["GET","PATCH","POST","DELETE", "UPDATE"],
    origin: ["http://localhost:5173"],
    maxAge: 3600
};

export default corsOptions;
import {Pool} from "pg"

const url = "postgresql://neondb_owner:npg_5tCghBlUWs3x@ep-icy-band-accrrsdg-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require"

const database = new Pool({
    connectionString: url, 
    ssl: {
     rejectUnauthorized: false
  }
})

export default database;
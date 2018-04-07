import envalid from 'envalid'

const validators = {
  NODE_ENV: envalid.str({default: 'development', choices: ['development', 'production', 'test']}),
  YOUTUBE_API_PATH: envalid.str(),
  YOUTUBE_API_KEY: envalid.str(),
  VIMEO_API_PATH: envalid.str(),
  VIMEO_AUTH_PATH: envalid.str(),
  VIMEO_CLIENT_ID: envalid.str(),
  VIMEO_CLIENT_SECRET: envalid.str()
}

const config = envalid.cleanEnv(process.env, validators, { dotEnvPath: '.env' })

export default config

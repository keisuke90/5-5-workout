import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  Strategy as JWTStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    (username: string, password: string, done: any) => {
      if (username === "hoge" && password === "fuga") {
        return done(null, username);
      } else {
        return (
          done(null, false),
          {
            message: "ユーザー名 または パスワードが違います",
          }
        );
      }
    }
  )
);

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

passport.use(
  new JWTStrategy(opts, (jwt_payload: any, done: any) => {
    done(null, jwt_payload);
  })
);

export default passport;

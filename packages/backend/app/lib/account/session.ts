import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  Strategy as JWTStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import { MySQLClient } from "../database/client";
import { QueryOptions } from "mysql2";

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    async (username: string, password: string, done: any) => {
      const getUserFromNameSql: QueryOptions = {
        sql: `SELECT * FROM users WHERE email = ?`,
        values: [username],
      };
      const user: any = await MySQLClient.executeQuery(getUserFromNameSql);
      if (username === user.name && password === user.password) {
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

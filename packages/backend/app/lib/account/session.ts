import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  Strategy as JWTStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import { MySQLClient } from "../database/client";
import { QueryOptions } from "mysql2";
import bcrypt from "bcrypt";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    async (email: string, password: string, done: any) => {
      const getUserFromNameSql: QueryOptions = {
        sql: `SELECT * FROM users WHERE email = ?`,
        values: [email],
      };
      const user: any = await MySQLClient.executeQuery(getUserFromNameSql);
      const comparedPassword = await bcrypt.compare(password, user[0].password);
      if (email === user[0].email && comparedPassword) {
        return done(null, email);
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

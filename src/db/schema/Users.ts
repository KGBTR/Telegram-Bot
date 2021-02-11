import {
  getModelForClass,
  prop,
  pre,
  post,
  modelOptions,
  ReturnModelType,
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

enum Role {
  USER = "user",
  ADMIN = "admin",
}

// @modelOptions({ schemaOptions: { collection: "Users" } })
class UserModal extends TimeStamps {
  @prop()
  public userID: number;

  @prop({ default: Role.USER })
  public role?: Role;

  @prop()
  public name: string;

  @prop()
  public surname: string;

  @prop({ default: null })
  username?: string;
}

export const User = getModelForClass(UserModal);

// UserSchema.pre("save", function (this: any, next: Function) {
//   if (!this.isModified("password")) return next();

// bcrypt.genSalt(10, (err: any, salt: any) => {
//   if (err) next(err);
//   bcrypt.hash(this.password, salt, (err: any, hash: any) => {
//     if (err) next(err);
//     this.password = hash;
//     next();
//   });
// });
// });

// UserSchema.methods.generateJWTFromUser = function () {
// const payload = {
//   id: this.id,
//   username: this.username,
//   name: this.name,
//   email: this.email,
//   role: this.role,
//   blocked: this.blocked,
// };

// const token = jwt.sign(payload, process.env.JWT_SECRET_KEY || "", {
//   expiresIn: process.env.JWT_EXPIRE,
// });

// return token;
// };

// UserSchema.methods.getResetPasswordTokenFromUser = function () {
// const randomHex = crypto.randomBytes(15).toString("hex");

// const resetPasswordToken = crypto
//   .createHash("SHA256")
//   .update(randomHex)
//   .digest("hex");

// this.resetPasswordToken = resetPasswordToken;
// this.resetPasswordExpire =
//   Date.now() + parseInt(process.env.RESET_PASSWORD_EXPIRE || "3600000");
// const resetPasswordExpire =
//   Date.now() + parseInt(process.env.RESET_PASSWORD_EXPIRE || "3600000");

// return resetPasswordToken;
// };

// export const User = model<IUser & IUserDoc>("User", UserSchema);

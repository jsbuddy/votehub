const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true }
}, { timestamps: true });

// userSchema.pre('save', function (next) {
// 	const user = this,
// 		SALT_FACTOR = 5;

// 	if (!user.isModified('password')) return next();

// 	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
// 		if (err) return next(err);

// 		bcrypt.hash(user.password, salt, null, function (err, hash) {
// 			if (err) return next(err);
// 			user.password = hash;
// 			next();
// 		});
// 	});
// });

// UserSchema.methods.comparePassword = function (password) {
// 	return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', userSchema)
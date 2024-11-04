const {Schema, model} = require('mongoose');

const bankSchema = new Schema({
    instructorId: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
    bankLocation: {type: String, required: true, enum: ['Inside the USA', 'Outside the USA']},
    bankName: { type: String, required: true},
    accountHolderName: { type: String, required: true},
    routingNumber: { type: String,
        validate: {
            validator: function () {
                return this.bankLocation === 'Inside the USA' ? !!this.routingNumber : true;
            },
        }
    },
    swiftCode: { type: String,
        validate: {
            validator: function () {
                return this.bankLocation === 'Outside the USA' ? !!this.swiftCode : true;
            },
        }
    },
    accountType: { type: String, enum: ['Checking', 'Savings'], default: 'Checking'},
    bankAccountNumber: {type: String, required: true},
    wiseaccount_id: { type: Number },
    emailAddress: { type: String },
    state: { type: String,
        validate: {
            validator: function () {
                return this.bankLocation === 'Inside the USA' ? !!this.state : true;
            }
        }
    },
    city: {type: String},
    subcity: {type: String,
        validate: {
            validator: function () {
                return this.bankLocation === 'Outside the USA' ? !!this.subcity : true;
            }
        }
    },
    streetAddress: { type: String },
    postalCode: { type: String,
        required: function () {
            return this.bankLocation === 'Inside the USA';
        },
        default: function () {
            return this.bankLocation === 'Outside the USA' ? '00000' : undefined;
        }
     },
}, { timestamps: true });

module.exports = model('Bank', bankSchema);

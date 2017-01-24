/**
 * Incomesalary.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    incomeChargebleHead : 'Number',
	employerName : 'String',
	employerType : 'String',
	employerAddress : 'String',
	employerAddressTown :'String',
	employerAddressState : 'String',
	employerAddressPincode : 'String',
	incomeOther 	: 'Number',
	incomeExemptDividendEarned : 'Number',
	incomeExemptInterest : 'Number',
	incomeOtherMiscExempt : 'Number',
	incomeAgriGrossReceipt  : 'Number',
	expenditureOnAgri : 'Number',
	unabsorbedAgriLoss : 'Number',
	interestPaidOccupiedProperty : 'Number',
	finYearPreToComplOfConst : 'String',
	totIntPaidPreConstPeriod : 'Number',
    houseAddressBlockFlatDoor : 'String',
	houseAddressRoadStreet : 'String',
	houseAddressLocality  : 'String',
	housseAddressCity 	: 	'String',
	houseAddressStae	: 'String',
	houseAddressPincode	: 'String',
	proOwnershipPercentage : 'Number',
	finYear                 : 'String',
    userid         : 'String',
    pan         : 'String'
  }
};


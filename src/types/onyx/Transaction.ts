import * as OnyxCommon from './OnyxCommon';

type Comment = {
    comment?: string;
};

type Transaction = {
    transactionID: string;
    amount: number;
    currency: string;
    reportID: string;
    comment: Comment;
    merchant: string;
    created: string;
    pendingAction: OnyxCommon.PendingAction;
    errors: Record<string, string>;
    modifiedAmount: number;
    modifiedCreated: string;
    modifiedCurrency: string;
};

export default Transaction;

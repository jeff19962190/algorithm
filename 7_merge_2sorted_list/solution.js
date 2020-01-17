var mergeTwoLists = function(l1, l2) {
    var res = new ListNode();
    var curr = res;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            // Set current node to l1 if less than or equal
            curr.next = l1;
            // Move l1's head to next
            l1 = l1.next
        } else {
            // Else same case for l2
            curr.next = l2;
            l2 = l2.next;
        }
        // Move current to next
        curr = curr.next
    }

    if (l1 !== null) {
        curr.next = l1;
    } else if (l2 !== null) {
        curr.next = l2;
    }

    return res.next;
};
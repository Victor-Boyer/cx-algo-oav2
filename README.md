# cx-algo-oav2
EFREI

01 Bubble sorting
The idea is to move the largest items to the end of the list by moving them as follows:

We consider the first element of our list and compare it to the second. If it is larger, they are inverted.
We now consider the second element and compare it to the third. If it is larger, they are inverted.
We continue like this until we get to the end of the list. At this stage, we necessarily put the largest element at the end of the list.
We start the first 3 steps again but this time going only to the last - 1 position (since the largest is already in the last position)
We continue in this way by decreasing each time the place where we stop the comparisons.
This sorting is called bubbles because at each step, we bring up the largest "bubble" towards the end of the list.
For perhaps clearer explanations and examples we can go to Wikipedia

The goal of this exercise is to make a program that sorts a list using bubble sort.

INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY

02 Sort by insertion
Insertion sorting is similar to the way we put cards in our hands when playing.
When we add a card to a hand already sorted, we insert it directly in its place and we repeat the operation for each card to add to our hand.

The idea of ​​sorting by insertion is the same:

We start with the second element of the list. We put it aside (in a variable). If it is smaller than the first, we put the first in place of the second and the second (which was saved in a variable) in place of the first.
We now consider the third element. We put it aside in a variable. If it is smaller than the second, we put the second in place of the third. If it is smaller than the first, we put the first in place of the second.
So on, by shifting each time by one notch to the right all the elements which are larger than the element considered.
You can find explanations and examples on Wikipedia

INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY

03 (bonus) Sorting by selection
Sorting by selection consists of finding the smallest element in the list and placing it first, then finding the smallest among those that remain and placing it second etc.

You can find explanations and examples on Wikipedia

INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY

🐵 Credits
Craft with ❤️ in Paris.

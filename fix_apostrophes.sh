#!/bin/bash

# Fix apostrophes in about page
sed -i '' "s/\"Life isn't about waiting for the storm to pass. It's about learning to dance in the rain.\"/\`Life isn't about waiting for the storm to pass. It's about learning to dance in the rain.\`/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/That's when/That\&apos;s when/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/client's pain/client\&apos;s pain/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/won't judge/won\&apos;t judge/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/can't undo/can\&apos;t undo/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/you're worthy/you\&apos;re worthy/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/\"Your relationship doesn't have to be perfect, but you do need to be perfect for each other.\"/\`Your relationship doesn't have to be perfect, but you do need to be perfect for each other.\`/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/\"stronger than before\"/\`stronger than before\`/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/relationship's unique/relationship\&apos;s unique/g" app/\(marketing\)/about/page.tsx
sed -i '' "s/I'm here/I\&apos;m here/g" app/\(marketing\)/about/page.tsx

# Fix apostrophes in contact page
sed -i '' "s/I'm here/I\&apos;m here/g" app/\(marketing\)/contact/page.tsx
sed -i '' "s/you're in/you\&apos;re in/g" app/\(marketing\)/contact/page.tsx

# Fix apostrophes in FAQ page
sed -i '' "s/don't already/don\&apos;t already/g" app/\(marketing\)/faq/page.tsx
sed -i '' "s/I'll help/I\&apos;ll help/g" app/\(marketing\)/faq/page.tsx
sed -i '' "s/partner's perspective/partner\&apos;s perspective/g" app/\(marketing\)/faq/page.tsx
sed -i '' "s/you're both/you\&apos;re both/g" app/\(marketing\)/faq/page.tsx
sed -i '' "s/doesn't mean/doesn\&apos;t mean/g" app/\(marketing\)/faq/page.tsx

# Fix apostrophes in schedule page
sed -i '' "s/You're one/You\&apos;re one/g" app/\(marketing\)/schedule/page.tsx
sed -i '' "s/you'll discuss/you\&apos;ll discuss/g" app/\(marketing\)/schedule/page.tsx
sed -i '' "s/We'll explore/We\&apos;ll explore/g" app/\(marketing\)/schedule/page.tsx
sed -i '' "s/what's brought/what\&apos;s brought/g" app/\(marketing\)/schedule/page.tsx

echo "✅ Fixed all apostrophes!"
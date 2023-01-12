from typing import Optional

import strawberry


@strawberry.type
class Pokemon:
    name: Optional[str]
    type: Optional[str]


__all__ = [
    "Pokemon"
]

from typing import Optional, List
import strawberry

from pokemon.models import Pokemon


@strawberry.type
class PokemonType:
    name: Optional[str]
    type: Optional[str]


@strawberry.input
class PokemonInput:
    name: Optional[str]
    type: Optional[str]


@strawberry.type
class Query:
    @strawberry.field
    def pokemons(self, info, Search: Optional[str] = None, Type: Optional[str] = None) -> Optional[List[PokemonType]]:
        if Search is not None:
            return Pokemon.objects.filter(name__icontains=Search)
        elif Type is not None:
            return Pokemon.objects.filter(type__icontains=Type)
        else:
            return Pokemon.objects.all()

    @strawberry.field
    def pokemon(self, info, ID: Optional[int] = None, Name: Optional[str] = None) -> Optional[List[PokemonType]]:
        if ID is not None:
            return Pokemon.objects.filter(id=ID)
        else:
            return Pokemon.objects.filter(name__icontains=Name)

    @strawberry.field
    def types(self, info) -> Optional[List[str]]:
        return Pokemon.objects.values_list('type', flat=True).distinct()

    @strawberry.field
    def type(self, info, Search: str) -> Optional[List[PokemonType]]:
        return Pokemon.objects.filter(type__icontains=Search)


@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_pokemon(self, info, Input: PokemonInput) -> PokemonType:
        pokemon = Pokemon.objects.create(
            name=Input.name,
            type=Input.type,
        )
        return pokemon

    @strawberry.mutation
    def update_pokemon(self, info, ID: int, Input: PokemonInput) -> PokemonType:
        pokemon = Pokemon.objects.get(id=ID)
        pokemon.name = Input.name
        pokemon.type = Input.type
        pokemon.save()
        return pokemon

    @strawberry.mutation
    def delete_pokemon(self, info, Name: str, ID: Optional[int] = None) -> PokemonType:
        if ID is not None:
            pokemon = Pokemon.objects.get(id=ID)
        else:
            pokemon = Pokemon.objects.get(name=Name)
        pokemon.delete()
        return pokemon


schema = strawberry.Schema(query=Query, mutation=Mutation)

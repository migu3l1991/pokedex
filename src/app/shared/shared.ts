import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPokemonData } from '../models/interfaces/pokemon.interface';

@Injectable()
export class Shared {
  private statusActionsHeader: Subject<boolean> = new Subject<boolean>();
  private editMode = false;
  private pokemonData: IPokemonData;
  private emailProfile: string;

  setStatusActionsHeader(newStatus: boolean) {
    this.statusActionsHeader.next(newStatus);
  }

  getStatusActionsHeader() {
    return this.statusActionsHeader.asObservable();
  }

  setEditMode(status: boolean) {
    this.editMode = status;
  }

  getEditMode() {
    return this.editMode;
  }

  setPokemonData(podemon: IPokemonData) {
    this.pokemonData = podemon;
  }

  getPokemonData() {
    return this.pokemonData;
  }

  setEmailProfile(email: string) {
    this.emailProfile = email;
  }

  getEmailProfile() {
    return this.emailProfile;
  }
}

import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-affecter',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule
  ],
  templateUrl: './affecter.component.html',
  styleUrl: './affecter.component.css'
})
export class AffecterComponent {

  currentColor: string = 'lightgray'; // Couleur actuelle du composant
  colors: string[] = [
    'red', 'blue', 'green', 'yellow', 'orange',
    'purple', 'pink', 'cyan', 'lime', 'brown'
  ];
  showColors: boolean = false; // Contrôle l'affichage des couleurs

  // Méthode pour changer la couleur
  changeColor(color: string) {
    this.currentColor = color;
    this.showColors = false; // Ferme la palette de couleurs après sélection
  }

  // Méthode pour afficher ou masquer la palette de couleurs
  toggleColors() {
    this.showColors = !this.showColors;
  }
  
  task: string = '';
  date: string = '';
  time: string = '';
  tasks: Array<{ task: string; date: string; time: string }> = [];
  taskCount: number = 0; // Propriété pour compter les tâches
  notification: string = ''; // Propriété pour stocker la notification

  constructor() {
    // Charger les tâches depuis le localStorage lors de l'initialisation
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.taskCount = this.tasks.length; // Initialiser le compteur
    }
  }

  onSave() {
    // Créer un nouvel objet tâche
    const newTask = { task: this.task, date: this.date, time: this.time };
    
    // Ajouter la nouvelle tâche au tableau
    this.tasks.push(newTask);
    
    // Sauvegarder les tâches dans le localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    
    // Mettre à jour le compteur de tâches
    this.taskCount++;
    
    // Afficher la notification
    this.notification = `Vous avez ajouté ${this.taskCount} tâche(s).`;
    
    // Réinitialiser les champs du formulaire
    this.task = '';
    this.date = '';
    this.time = '';

    
    // Optionnel : Effacer la notification après un certain temps
    setTimeout(() => {
      this.notification = '';
    }, 3000); // Efface la notification après 3 secondes
  }

  removeTask(index: number) {
    // Supprimer la tâche à l'index spécifié
    this.tasks.splice(index, 1);
    
    // Mettre à jour le localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    
    // Mettre à jour le compteur de tâches
    this.taskCount--;
  
    // Afficher une notification
    this.notification = `Vous avez supprimé une tâche. Il vous reste ${this.taskCount} tâche(s).`;
  
    // Optionnel : Effacer la notification après un certain temps
    setTimeout(() => {
      this.notification = '';
    }, 3000); // Efface la notification après 3 secondes
  }
}
